import "commonReactions/all.dsl";

context {
    // declare input variables phone and name  - these variables are passed at the outset of the conversation. In this case, the phone number and customer’s name 
    input phone: string;
    input name: string = ""; 

    // declare storage variables 
    q1_rate: string = "";
    q2_rate: string = "";
    q3_rate: string = "";
    q1_feedback: string = "";
    q2_feedback: string = "";
    q3_feedback: string = "";
    final_feedback: string = "";
    call_back: string = "";
}

// the external function below is not used in this app, we solved the rating check within the capabilities of DashaScript. Keeping this here for illustration purposes
// external function check_rating(rate: string): boolean;

// declaring external function for console logging, so that we can check the values of the variables, as the conversation progresses  
external function console_log(log: string): string;

start node root {
    //actions executed in this node
    do {
        #connectSafe($phone); // connecting to the phone number which is specified in index.js that it can also be in-terminal text chat
        #waitForSpeech(1000); // give the person a second to start speaking 
        #say("greeting", {name: $name} ); // and greet them. Refer to phrasemap.json > "greeting" (line 12); note the variable $name for phrasemap use
        wait *;
    }

    // specifies to which nodes the conversation goes from here 
    transitions {
        question_1: goto question_1 on #messageHasIntent("yes"); // feel free to modify your own intents for "yes" and "no" in data.json
        call_back: goto when_call_back on #messageHasIntent("no"); 
    }
}

node question_1 {
    do {
        //call on phrase "question_1" from the phrasemap
        #say("question_1"); 
        wait *;
    }

    transitions {
        // when Dasha identifies that the user's phrase contains "rating" data, as specified in the named entities section of data.json, a transfer to node q1Evaluate happens 
        q1Evaluate: goto q1Evaluate on #messageHasData("rating"); 
    }
}

node q1Evaluate {
    do {
        //assign variable $q1_rate with the value extracted from the user's previous statement 
        set $q1_rate =  #messageGetData("rating")[0]?.value ?? ""; 

        // #messageGetData collects data as an array of strings; we convert the string into a number in order to evaluate whether the rating is positive or negative
        var q1_num = #parseInt($q1_rate); 
    
        if (q1_num == 1) {
            goto question_2; // note that this function refers to the transition's name, not the node name 
        }
        else {
            goto question_1_n;
        }
    }

    transitions {
        // you need to declare transition name and the node it refers to here
        question_2: goto question_2;
        question_1_n: goto question_1_n;
    }
}

node question_1_n {
    do  {
        #say("question_1_n");
        wait *;
    }

    transitions {
        // "on true" is a condition which lets Dasha know to take the action if the user utters any phrase 
        q1_n_to_q2: goto q1_n_to_q2 on true;
    }

    // specifies an action that Dasha AI should take, as it exits the node. The action must be mapped to a transition
    onexit {
        q1_n_to_q2: do {
            set $q1_feedback = #getMessageText();
            external console_log($q1_feedback); // call on external function console_log (we want to see that the data was collected properly), you can then use the variable to push to wherever you want to use it from index.js
        }
    }
}

node q1_n_to_q2 {
    do {
        #say("transition");
        goto question_2;
    }

    transitions {
        question_2: goto question_2;
    }
}

node question_2 {
    do {
        #say("question_2");
        wait *;
    }

    transitions {
        q2Evaluate: goto q2Evaluate on #messageHasData("rating");
    }
}

node q2Evaluate {
    do {
        set $q2_rate = #messageGetData("rating")[0]?.value ?? ""; 
        var q2_num = #parseInt($q2_rate);
        if (q2_num == 3) {
            goto question_3;
        } else {
            goto question_2_n;
        }
    }

    transitions {
        question_3: goto question_3;
        question_2_n: goto question_2_n;
    }
}

node question_2_n {
    do {
        #say("question_2_n");
        wait*;
    }

    transitions {
        q2_n_to_q3: goto q2_n_to_q3 on true;
    }

    onexit {
        q2_n_to_q3: do {
            set $q2_feedback = #getMessageText();
            external console_log($q2_feedback);
        }
    }
}

node q2_n_to_q3 {
    do {
        #say("transition");
        goto question_3;
    }

    transitions {
        question_3: goto question_3;
    }
}

node question_3 {
    do {
        #say("question_3");
        wait*;
    }

    transitions {
        q3Evaluate: goto q3Evaluate on #messageHasData("rating");
    }
}

node q3Evaluate {
    do {
        set $q3_rate =  #messageGetData("rating")[0]?.value??"";
        var q3_num = #parseInt($q3_rate);
        if (q3_num == 4) {
            goto question_3_p;
        } else {
            goto question_3_n;
        }
    }
    transitions {
        question_3_p: goto question_3_p;
        question_3_n: goto question_3_n;
    }
}

node question_3_p {
    do {
        #say("question_3_p");
        wait*;
    }

    transitions {
        final_q: goto final_q on true;
    }

    onexit {
        final_q: do {
            set $q3_feedback = #getMessageText();
            external console_log($q3_feedback);
        }
    }
}

node question_3_n {
    do {
        #say("question_3_n");
        wait*;
    }

    transitions {
        q3_to_final: goto q3_to_final on true;
    }

    onexit {
        q3_to_final: do {
            set $q3_feedback = #getMessageText();
            external console_log($q3_feedback);
        }
    }
}

node q3_to_final {
    do {
        #say("transition");
        goto final_q;
    }
    transitions {
        final_q: goto final_q;
    }
}

node final_q {
    do {
        #say("final_q");
        wait*;
    }

    transitions {
       final_bye : goto final_bye on true;
    }

    onexit {
        final_bye: do {
            set $final_feedback = #getMessageText();
            external console_log($final_feedback);
        }
    }
}

node final_bye {
    do {
        #say("final_bye");
        exit;
    }
}

node when_call_back {
    do {
        #say("when_callback");
        wait *;
    }

    transitions {
       call_back: goto call_back on true;
    }

    // specifies to which nodes the conversation goes from here and based on which conditions. E.g. if intent “yes” is identified, the conversation transitions to node question_1 
    onexit {
        call_back: do {
            set $call_back = #getMessageText(); // take down the entirety of the user's response as a string 
            external console_log($call_back); // call on external function console_log (we want to see that the data was collected properly), you can then use the variable to push to wherever you want to use it from index.js
        }
    }
} 

node call_back {
    do {
        #say("i_will_call_back");
        exit;
    }
}
// call me back flow ends 

// digressions - I'm giving one example here, you can build the rest on the same principle 
digression how_are_you
{
    conditions {on #messageHasIntent("how_are_you");}
    do {
        #sayText("I'm well, thank you!", repeatMode: "ignore"); 
        #repeat(); // let the app know to repeat the phrase in the node from which the digression was called, when go back to the node 
        return; // go back to the node from which we got distracted into the digression 
    }
}
