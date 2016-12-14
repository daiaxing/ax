/**
 * Created by apple on 2016/11/23.
 */
document.getElementById('user').innerText=
    Cookies.get('user');
if(Cookies.get('user')){
    document.getElementById('wel').innerText='欢迎你';

}
