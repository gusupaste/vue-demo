<template>
    <div @click="logout">
        退出登录
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        logout(){
            $axios.get('Logout')
                    .then(response => {
                        removeIsLogin()
                        localStorage.removeItem('loginUsername');
                        // 移除之前在
                        // axios
                        // 头部设置的token, 现在将无法执行需要token的事务
                        delete axios.defaults.headers.common['Authorization'];
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
        }
    }
}
</script>

