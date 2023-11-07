package com.gyc.spring.service;

import org.springframework.stereotype.Service;

import com.gyc.spring.dto.EventoDTO;
import com.gyc.spring.mapper.EventoMapper;
import com.gyc.spring.model.Evento;
import com.gyc.spring.repository.EventoRepository;

@Service
public class EventoService extends GenericService<Evento, Long, EventoDTO> {

    public EventoService(EventoRepository repository, EventoMapper mapper){
        super(repository, mapper);
    }
}
