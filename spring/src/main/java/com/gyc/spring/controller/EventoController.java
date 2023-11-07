package com.gyc.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;

import com.gyc.spring.model.Evento;
import com.gyc.spring.service.EventoService;

@RestController
@RequestMapping("/api/evento")
public class EventoController {

    public final EventoService service;
    
    public EventoController(EventoService service){
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Evento save(@RequestBody Evento evento){
        return service.save(evento);
    }
}
