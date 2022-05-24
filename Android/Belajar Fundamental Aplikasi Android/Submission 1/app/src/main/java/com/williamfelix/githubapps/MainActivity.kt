package com.williamfelix.githubapps

import android.content.res.Configuration
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager

class MainActivity : AppCompatActivity() {
    private lateinit var rvUsers : RecyclerView
    private val list = ArrayList<User>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

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
            val dataPhoto = resources.obtainTypedArray(R.array.avatar)
            val listUser = ArrayList<User>()
            for (i in dataName.indices) {
                val hero = User(dataName[i],dataUsername[i], dataPhoto.getResourceId(i, -1))
                listUser.add(hero)
            }
            return listUser
        }
}