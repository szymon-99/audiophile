import React from "react"
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai"

interface FooterLink {
  icon: JSX.Element
  path: string
  id: number
}

export const socialLinks: FooterLink[] = [
  {
    icon: <AiFillFacebook />,
    path: "https://www.facebook.com",
    id: 4125,
  },
  {
    icon: <AiOutlineTwitter />,
    path: "https://www.twitter.com",
    id: 5326,
  },
  {
    icon: <AiOutlineInstagram />,
    path: "https://instagram.com",
    id: 1256,
  },
]
