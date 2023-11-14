package com.gyc.spring.exception;

public class SystemNotFound extends RuntimeException {
    
    public SystemNotFound(String msg){
        super(msg);
    }

    public SystemNotFound(){
        super();
    }
}
