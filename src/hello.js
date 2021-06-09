function hello(name) {
    if (!name) {
        return 'Hi, what is your name?';
    }
    return `Hello ${name}`;
}

export default hello;
