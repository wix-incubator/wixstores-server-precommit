switch (process.argv[2]) {
    case 'hook':
        require('./');
        break;
    default:
        console.log('Not Supported')
}