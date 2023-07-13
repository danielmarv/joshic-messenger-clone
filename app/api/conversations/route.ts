import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/libs/prismadb';

export async function POST(requesr: Response) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();

    } catch (error) {
        return new
    }
}