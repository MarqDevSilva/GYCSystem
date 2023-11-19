package com.gyc.spring.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gyc.spring.dto.EventoDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.EventoMapper;
import com.gyc.spring.model.Evento;
import com.gyc.spring.repository.EventoRepository;

@Service
public class EventoService extends BaseService<Evento, EventoDTO> {

    public EventoService(EventoRepository repository, EventoMapper mapper){
        super(repository, mapper); 
    }

    public EventoDTO update(Long id, EventoDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
