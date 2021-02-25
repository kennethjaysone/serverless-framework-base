async function hello(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hi there :) - Kenneth"})
    };
}

export const handler = hello;