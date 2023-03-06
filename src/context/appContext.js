import { io } from "socket.io-client";
import React from "react";
const SOCKET_URL = "http://localhost:5001";
export var socket = io(SOCKET_URL);
// app context
export const AppContext = React.createContext();
