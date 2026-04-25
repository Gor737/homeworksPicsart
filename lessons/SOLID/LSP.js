                                        //------MINI PROJECT — Notification System------
class Notification {
    send(message){
        return `${message} sending`
    }
}                                    

class EmailNotification extends Notification{
    send(message){
        return `Email: ${message} sending`;
    }
}

class SMSNotification extends Notification{
    send(message){
        return `SMS: ${message} sending`
    }
}

class PushNotification extends Notification{
    send(message){
        return `Push: ${message} sending`
    }
}

class NotificationService {
    serviceActivate(service, message){
        return service.send(message);
    }
}