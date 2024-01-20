import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { IoTrophySharp } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { PiNotebookFill } from "react-icons/pi";
import { FaSmile } from "react-icons/fa";
import { MdPodcasts } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";

const List = [
    {
        id:"news",
        title:"News",
        icon:<FaRegNewspaper />,
    },
    {
        id:"music",
        title:"Music",
        icon:<FaMusic />,
    },
    {
        id:"movie",
        title:"Movies",
        icon:<MdLocalMovies />,
    },
    {
        id:"gaming",
        title:"Gaming",
        icon:<IoGameController />,
    },
    {
        id:"sport",
        title:"Sports",
        icon:<IoTrophySharp />,
    },
    {
        id:"education",
        title:"Education",
        icon:<PiNotebookFill />,
    },
    {
        id:"fashion",
        title:"Fashion",
        icon:<GiHanger />,
    },
    {
        id:"comedy",
        title:"Comedy",
        icon:<FaSmile />,
    },
    {
        id:"podcast",
        title:"Podcasts",
        icon:<MdPodcasts />,
    },
    {
        id:"vlog",
        title:"Vlogs",
        icon:<FaVideo />,
    },
    {
        id:"travel",
        title:"Travel",
        icon:<MdCardTravel />,
    },
]

export default List;