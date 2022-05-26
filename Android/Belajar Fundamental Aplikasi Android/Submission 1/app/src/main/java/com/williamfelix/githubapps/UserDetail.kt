package com.williamfelix.githubapps

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.bumptech.glide.Glide
import com.williamfelix.githubapps.databinding.ActivityUserDetailBinding


class UserDetail : AppCompatActivity() {

    private lateinit var binding: ActivityUserDetailBinding

    companion object {
        const val USER = "user"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityUserDetailBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val user = intent.getParcelableExtra<User>(USER) as User
        Glide.with(binding.imagesGithub)
            .load(user.photo)
            .centerCrop()
            .circleCrop()
            .into(binding.imagesGithub)
        binding.nameGithub.text = user.name
        binding.usernameGithub.text = user.username
        binding.follower.text =  "${user.followers} Follower"
        binding.following.text =  "${user.following} Following"
        binding.repo.text = "${user.repository} Repository"
        binding.company.text = "Company : ${user.company} Repository"
        binding.location.text = "Location : ${user.location}"
    }
}



