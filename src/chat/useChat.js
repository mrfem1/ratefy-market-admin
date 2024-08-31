import pusher from "./config.js"
import { onMounted, onUnmounted, ref } from "vue";


const useChat = (authSession) => {

    const chatMessages = ref(null);
    const channel = pusher.subscribe('Chat.' + authSession);

    const handleMessage = function (myData) {
      chatMessages.value =  myData;
    }

    const handleError = function (err) {
      if (err.data.code === 404) {
        log('Over limit!');
      }
    }



    onMounted(() => {
        channel.bind('App\\Events\\TransactionChat', handleMessage);
        pusher.connection.bind('error', handleError);
    });
      


      // Cleanup function
    //   return () => {
    //     channel.unbind('App\\Events\\TransactionChat', handleMessage);
    //     pusher.connection.unbind('error', handleError);

    //   };
 

  return { chatMessages }

}

export default useChat;