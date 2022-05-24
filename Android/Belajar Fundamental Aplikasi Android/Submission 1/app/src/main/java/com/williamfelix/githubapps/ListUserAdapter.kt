package com.williamfelix.githubapps

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide

class ListUserAdapter(private val listUser: ArrayList<User>): RecyclerView.Adapter<ListUserAdapter.ListViewHolder>() {
    private lateinit var onItemClickCallback: OnItemClickCallback

    class ListViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var imgPhoto: ImageView = itemView.findViewById(R.id.img_item_photo)
        var tvName: TextView = itemView.findViewById(R.id.tv_item_name)
        var tvDescription: TextView = itemView.findViewById(R.id.tv_item_username)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ListViewHolder {
        //val binding = ItemRowHeroBinding.inflate(LayoutInflater.from(viewGroup.context), viewGroup, false)
        val view: View = LayoutInflater.from(parent.context).inflate(R.layout.item_row_data, parent, false)
        return ListViewHolder(view)
    }

    fun setOnItemClickCallback(onItemClickCallback: OnItemClickCallback) {
        this.onItemClickCallback = onItemClickCallback
    }

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        val (name, username, photo) = listUser[position]
        holder.imgPhoto.setImageResource(photo)
        Glide.with(holder.itemView.context)
            .load(photo)
            .centerCrop()
            .circleCrop()
            .into(holder.imgPhoto)
        holder.tvName.text = name
        holder.tvDescription.text = username
        holder.itemView.setOnClickListener {
            Toast.makeText(holder.itemView.context, "Kamu memilih " + listUser[holder.adapterPosition].name, Toast.LENGTH_SHORT).show()
        }
    }

    override fun getItemCount(): Int = listUser.size

    interface OnItemClickCallback {
        fun onItemClicked(data: User)
    }
}