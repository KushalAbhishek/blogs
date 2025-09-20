//in react router we use mainly - {BrowserRouter , Routes, Route , Link}

import React from 'react'
import NavBar from './NavBar'

const Home = () => {

    const posts = [{
        id: 1,
        title: "The Outlaw's Journey",
        author: "Arthur Morgan",
        timeRead:" 5 min read",
        postedOn: "Jan 10, 2024",
        content: "Arthur Morgan, the rugged outlaw from Red Dead Redemption 2, is a man torn between loyalty to his gang and his own moral compass. His journey through the dying Wild West is one of survival, honor, and sacrifice.",
        Image: "https://pixelz.cc/wp-content/uploads/2018/06/red-dead-redemption-2-arthur-morgan-uhd-4k-wallpaper.jpg",
        profilePic: "https://cdn.costumewall.com/wp-content/uploads/2019/07/arthur-morgan.jpg",
    }, {
        id: 2,
        title: "Surviving Harran",
        author: "Kyle Crane",
        timeRead:" 7 min read",
        postedOn: "Dec 05, 2023",
        content: "Kyle Crane, the undercover GRE agent from Dying Light, ventures into the quarantined city of Harran. Armed with parkour skills and survival instincts, he must navigate zombies, factions, and his own conscience.",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zVe9bVYCsuSWWmYnvpQNLy0ndTpDducXSg&s",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsNHBTXGASWUY0NdLMaUu24f3u_MnPXX6Zg&s",
    }, {
        id: 3,
        title: "Life in Night City",
        author: "V",
        timeRead:" 6 min read",
        postedOn: "Nov 20, 2023",
        content: "V, the customizable mercenary protagonist of Cyberpunk 2077, navigates the dangerous streets of Night City. With cybernetic implants and choices that shape their fate, V’s story is one of ambition and survival.",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5ryqlUF-K72G11baOMvL9-HfmGKOGxyuzQ&s",
        profilePic: "https://i.redd.it/some-love-for-male-v-v0-00qksvnglnxc1.png?width=1440&format=png&auto=webp&s=068eb1fe1462b8d71d1682da89331bc9d45ce8e4",
    }, {
        id: 4,
        title: "Riding Through the Apocalypse",
        author: "Deacon St. John",
        timeRead:" 8 min read",
        postedOn: "Oct 01, 2023",
        content: "Deacon St. John, the former outlaw turned drifter and bounty hunter in Days Gone, struggles to survive in a world overrun by Freakers while searching for hope and redemption in the chaos.",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGBGzQFFmFtVv9C6jNItK8vF64iAa9wJRYw&s",
        profilePic: "https://pbs.twimg.com/media/ExovgUZWUAEc_J6.jpg",
    }, {
        id: 5,
        title: "Tombs and Adventures",
        author: "Lara Croft",
        timeRead:" 10 min read",
        postedOn: "Sep 15, 2023",
        content: "Lara Croft, the legendary archaeologist and adventurer from Tomb Raider, is known for her intelligence, strength, and relentless drive to uncover the world’s greatest secrets and survive deadly tombs.",
        Image: "https://store-images.s-microsoft.com/image/apps.29936.68847167288522183.9fdea778-258f-40d6-9f9e-fab92915bc6d.1384d782-b7b3-4a36-bbc6-bd817e308a4f?q=90&w=480&h=270",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMgwA8JvwbeRAa_myUY5iGI__yp7p9_ZEFw&s",
    }, {
        id: 6,
        title: "Isolation in Space",
        author:"Amanda Ripley",
        timeRead:" 9 min read",
        postedOn: "Aug 10, 2023",
        content: "Amanda Ripley, daughter of Ellen Ripley, is the protagonist of Alien: Isolation. Resourceful and determined, she must outwit a relentless Xenomorph aboard a derelict space station while uncovering the truth about her mother.",
        Image: "https://www.feralinteractive.com/images/news/1198/article.jpg",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStm4jQzAhyZ_x-ns-6Pk9kvh9TMz_FWS187g&s",
    }]


  return (
    
     <div className="min-h-screen flex flex-col items-center  bg-gray-50">
      <NavBar/>
            <p className="text-4xl font-bold">Welcome back, Dev Astra</p>
            <p className="text-lg text-gray-500 mt-4"> Discover amazing stories, insights, and ideas from our community of writers.</p>
            <div className=" flex gap-10 justify-around mt-5 ">
                <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md" >View My Posts</button>
            </div>
            <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5">
                {
                    posts.map((post) => (
                        <div className="w-96 bg-white shadow-lg rounded-lg" key={post.id}>
                            <div className="relative">
                                <img className=" rounded-t-lg  shadow-lg h-52 w-96 " src={post.Image} alt="Writing" />
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                            </div>
                            <div className="flex gap-5 mt-3 px-2">
                                <img className="rounded-full shadow-lg h-12 w-12 " src={post.profilePic} alt="Writing" />
                                <div>
                                    <p className="font-semibold">{post.author}</p>
                                    <p className="text-gray-500">{post.postedOn} - {post.timeRead}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3">
                                <p className="text-2xl font-bold ">{post.title}</p>
                                <p className="text-gray-600">
                                    {post.content}
                                </p>
                            </div>
                            <div className="mt-3 mb-3  px-3 flex justify-end">
                                <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                            </div>
                        </div>))
                }

            </div>
        </div>
  )
}

export default Home