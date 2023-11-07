package com.gyc.spring.service;

import org.springframework.stereotype.Service;

import com.gyc.spring.model.Evento;
import com.gyc.spring.repository.EventoRepository;

@Service
public class EventoService {
    
    private final EventoRepository repository;

    public EventoService(EventoRepository repository){
        this.repository = repository;
    }

    public Evento save(Evento evento){
        return repository.save(evento);
    }
}
