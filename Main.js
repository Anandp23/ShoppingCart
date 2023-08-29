import React, {useEffect} from "react";
import AppNavigator from './AppNavigator';
import { useDispatch } from "react-redux";
import { addMyProducts } from "./redux/MyProductSlice";

let items = [
    {
    id:0,
      image:
        "https://cdn.kobo.com/book-images/2aaef2d2-8c18-4bac-99d4-541f7375bf85/1200/1200/False/perspectives-in-indian-history.jpg",
      name: "Perspectives In Indian History",
      author: "M.Jankiraman",
  
    },
    {
        id:1,
      image:
        "https://nypost.com/wp-content/uploads/sites/2/2021/11/golden-boy.jpg?quality=90&strip=all",
      name: "Golden Boy",
      author: "John Glatt",
  
    },
    {
        id:2,
      image:
        "https://kinsta.com/wp-content/uploads/2021/10/deep-work-book.jpg",
      name: "Deep Work",
      author: "Cal Newport",
  
    },
    {
        id:3,
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ue0FzDkYRWphSixyveAasA.png",
      name: "The Monk Who Sold His Ferrrari",
      author: "Robin Sharma",
  
    },
    {
        id:4,
      image:
        "https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2023/02/28102417/the-wolf-den-cover.jpeg",
      name: "The Wolf Den",
      author: "Elodie Harper",
  
    },
  ];

  const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        items.map(item => {
            dispatch(addMyProducts(item));
        })
    }, []);
    return <AppNavigator/>
  };

  export default Main;