interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'fdkslçjgçlfkjdshgkjhsdokgoskcoaiuhfoaisfu',
                user: {
                    name: 'Miguel',
                    email: 'miguel@gmail.com',
                },
            });
        }, 2000);
    });
}
