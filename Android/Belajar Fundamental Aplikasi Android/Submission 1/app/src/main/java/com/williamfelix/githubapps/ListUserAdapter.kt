package com.williamfelix.githubapps

import android.view.LayoutInflater
import android.content.Intent
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.williamfelix.githubapps.databinding.ItemRowDataBinding

class ListUserAdapter(private val listUser: ArrayList<User>): RecyclerView.Adapter<ListUserAdapter.ListViewHolder>() {
    class ListViewHolder(var binding: ItemRowDataBinding) : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(viewGroup: ViewGroup, viewType: Int): ListViewHolder {
        val binding = ItemRowDataBinding.inflate(LayoutInflater.from(viewGroup.context), viewGroup, false)
        return ListViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        val (name, username, photo) = listUser[position]
        Glide.with(holder.itemView.context)
            .load(photo)
            .centerCrop()
            .circleCrop()
            .into(holder.binding.imgItemPhoto)

        holder.binding.tvItemName.text = name
        holder.binding.tvItemUsername.text = username
        holder.itemView.setOnClickListener {
            val userDetail = Intent(holder.itemView.context,UserDetail::class.java)
            userDetail.putExtra(UserDetail.USER, listUser[holder.adapterPosition])
            holder.itemView.context.startActivity(userDetail)
        }
    }

    override fun getItemCount(): Int = listUser.size

}