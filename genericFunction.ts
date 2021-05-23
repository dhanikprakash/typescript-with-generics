function print<T>(data: T): void {
    console.log(data);
}

print<string>('HelloWorld!');

const print_v2 = <T>(data: T): void => {
     console.log(data)
}

print_v2<number>(12345);