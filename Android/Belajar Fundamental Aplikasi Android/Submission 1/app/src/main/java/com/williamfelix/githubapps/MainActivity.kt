package com.williamfelix.githubapps

import android.content.res.Configuration
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import com.williamfelix.githubapps.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var rvUsers : RecyclerView
    private val list = ArrayList<User>()
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)


        rvUsers = findViewById(R.id.rv_users)
        rvUsers.setHasFixedSize(true)

        list.addAll(listUser)
        showRecyclerList()
    }

    private fun showRecyclerList() {
        if (applicationContext.resources.configuration.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            rvUsers.layoutManager = GridLayoutManager(this, 2)
        } else {
            rvUsers.layoutManager = LinearLayoutManager(this)
        }
        val listUserAdapter = ListUserAdapter(list)
        rvUsers.adapter = listUserAdapter
    }

    private val listUser: ArrayList<User>
        get() {
            val dataName = resources.getStringArray(R.array.name_github)
            val dataUsername = resources.getStringArray(R.array.username)
            val location = resources.getStringArray(R.array.location)
            val repository = resources.getStringArray(R.array.repository)
            val company = resources.getStringArray(R.array.company)
            val followers = resources.getStringArray(R.array.followers)
            val following= resources.getStringArray(R.array.following)
            val dataPhoto = resources.obtainTypedArray(R.array.avatar)
            val listUser = ArrayList<User>()
            for (i in dataName.indices) {
                val hero = User(dataName[i],dataUsername[i], dataPhoto.getResourceId(i, -1), location[i], repository[i], company[i],followers[i], following[i])
                listUser.add(hero)
            }
            return listUser
        }
}