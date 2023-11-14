package com.gyc.spring.service;

import org.springframework.stereotype.Service;

import com.gyc.spring.dto.EventoDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.EventoMapper;
import com.gyc.spring.model.Evento;
import com.gyc.spring.repository.EventoRepository;

@Service
public class EventoService extends GenericService<Evento, EventoDTO> {

    public EventoService(EventoRepository repository, EventoMapper mapper){
        super(repository, mapper);
    }

    public EventoDTO atualizar(Long id, EventoDTO portariaAtualizado) {
        if (repository.existsById(id)) {
            return atualizar(mapper.toDto(mapper.toEntity(portariaAtualizado)));
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
