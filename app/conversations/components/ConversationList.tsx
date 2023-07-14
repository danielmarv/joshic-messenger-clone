'use client';

import useConversation from "@/app/hooks/useConversation";
import { Conversation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ConversationListProps {
  initialItems: Conversation[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems
}) => {
  const [items, setItems] = useState(initialItems);

  const router = useRouter();

  const { conversationId, isOpen } = useConversation();
  
  return (
    <div>Conversation List</div>
  )
}

export default ConversationList