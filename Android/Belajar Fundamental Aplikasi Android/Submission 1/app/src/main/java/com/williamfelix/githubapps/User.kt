package com.williamfelix.githubapps

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class User(
    var name: String,
    var username: String,
    var photo: Int
) : Parcelable