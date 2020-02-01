const arg = process.argv[2];
switch (arg) {
    case 'hook':
        require('./');
        break;
    default:
        console.log('Not Supported')
}