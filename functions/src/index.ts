/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/call";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/v2/https";
import {condominiosApi as condominiosApp} from "./condominios";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

setGlobalOptions({maxInstances: 10});

export const condominiosApi = onRequest(condominiosApp);
