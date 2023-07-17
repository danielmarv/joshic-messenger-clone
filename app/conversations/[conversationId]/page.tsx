import getConversationById from "@/app/actions/getConversationById"
import getMessages from "@/app/actions/getMessages";

interface IParams {
    conversationId: string;
};

const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);
    if (!conversation) {
        return (
            <div className="lg:pl-80 h-full">
                
            </div>
        )
    }

    return (
        <div>
            Conversation ID!
        </div>
    )
}

export default ConversationId;