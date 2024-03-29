import { memo } from "react";
import useSWR from "swr";

import { ChatCard } from "../../types/ChatCard";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { MOCK_API_URL } from "@/constants/mockApiUrl";
import { fetcherWithAuth } from "@/utils/fetcherWithAuth";

type Props = {
  id: string;
};

export const DeleteChatDialog = memo(({ id }: Props) => {
  const { data: chatCards, mutate } = useSWR<ChatCard[]>(`/chats`);

  const handleDeleteClick = async () => {
    const updatedChatCards = chatCards?.filter((chatCard) => {
      return chatCard.id !== id;
    });

    await mutate(
      async () => {
        const { error, res } = await fetcherWithAuth(`${MOCK_API_URL}/chats/${id}`, undefined, {
          method: "DELETE",
        });

        if (error) {
          toast({
            title: "削除に失敗しました",
            variant: "destructive",
          });
          throw new Error();
        } else if (res?.status === 401) {
          toast({
            title: "ログインできていません",
            variant: "destructive",
          });
        }

        return updatedChatCards;
      },
      {
        optimisticData: updatedChatCards,
        rollbackOnError: true,
      },
    );
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">削除</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>本当に削除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            この操作は取り消すことができず、すべてのチャット履歴が削除されます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction onClick={() => void handleDeleteClick()}>削除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

DeleteChatDialog.displayName = "DeleteChatDialog";
