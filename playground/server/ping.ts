import { defineHandler } from "../../src/handler";

export default defineHandler(async (c) => {
	return {
		message: "pong",
	};
});
