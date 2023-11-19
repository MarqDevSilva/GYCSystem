package com.gyc.spring;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.gyc.spring.model.Evento;
import com.gyc.spring.model.Pay;
import com.gyc.spring.repository.PayRepository;
import com.gyc.spring.service.EventoService;
import com.gyc.spring.service.PayService;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

	}

 	@Autowired
    private EventoService eventoService;
    
    @Autowired
    private PayService payService;

	@Autowired
    private PayRepository payRepository;

    @Bean
    public void initData() {
        // Chame outro método para realizar a inicialização de dados
        initializeData();
    }

    public void initializeData() {
        // Crie um novo evento
        
    }
	
}
