export const isLogin = () => {
    const token = ('; '+document.cookie).split(`; token=`).pop().split(';')[0];
    if (token) {
        return true;
    }
    return false;
}