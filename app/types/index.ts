import { Conversation, Message, User } from "@prisma/client";

export type FullMessagetype = Message & {
    sender: User,
    seen: User[]
};

export type FullConversationtype = Conversation & {
    users: User[],
    messages: FullMessagetype[],
}