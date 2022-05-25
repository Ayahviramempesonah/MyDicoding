package com.williamfelix.githubapps

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.williamfelix.githubapps.databinding.ItemRowDataBinding

class ListUserAdapter(private val listUser: ArrayList<User>): RecyclerView.Adapter<ListUserAdapter.ListViewHolder>() {
    private lateinit var onItemClickCallback: OnItemClickCallback

    class ListViewHolder(var binding: ItemRowDataBinding) : RecyclerView.ViewHolder(binding.root) {

    }

    override fun onCreateViewHolder(viewGroup: ViewGroup, viewType: Int): ListViewHolder {
        val binding = ItemRowDataBinding.inflate(LayoutInflater.from(viewGroup.context), viewGroup, false)
        return ListViewHolder(binding)
    }

    fun setOnItemClickCallback(onItemClickCallback: OnItemClickCallback) {
        this.onItemClickCallback = onItemClickCallback
    }

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        val (name, username, photo) = listUser[position]
        holder.binding.imgItemPhoto.setImageResource(photo)
        Glide.with(holder.itemView.context)
            .load(photo)
            .centerCrop()
            .circleCrop()
            .into(holder.binding.imgItemPhoto)
        holder.binding.tvItemName.text = name
        holder.binding.tvItemUsername.text = username
        holder.itemView.setOnClickListener {
            Toast.makeText(holder.itemView.context, "Kamu memilih " + listUser[holder.adapterPosition].name, Toast.LENGTH_SHORT).show()
        }
    }

    override fun getItemCount(): Int = listUser.size

    interface OnItemClickCallback {
        fun onItemClicked(data: User)
    }
}