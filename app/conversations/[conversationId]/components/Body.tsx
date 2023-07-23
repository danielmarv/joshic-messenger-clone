"use client";

import { FullMessagetype } from "@/app/types"

interface BodyProps {
  initialMessages: FullMessagetype[]
}

const Body = () => {
  return (
    <div className="flex-1 overflow-y-auto">
        Body!
    </div>
  )
}

export default Body;