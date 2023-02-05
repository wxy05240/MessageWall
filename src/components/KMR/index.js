import Message from './message/message'
export default {
    install(app){
        app.config.globalProperties.Modal = Message
    }
}