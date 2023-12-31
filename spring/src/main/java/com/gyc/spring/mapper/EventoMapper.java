package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.EventoDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Evento;

@Component
@ComponentScan
public class EventoMapper implements EntityMapper<EventoDTO, Evento> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        EventoMapper.mapper = mapper;
    }

    @Override
    public Evento toEntity(EventoDTO eventoDTO) {
        return mapper.map(eventoDTO, Evento.class);
    }

    @Override
    public EventoDTO toDto(Evento evento) {
        return mapper.map(evento, EventoDTO.class);
    }

    @Override
    public List<Evento> toEntity(List<EventoDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<EventoDTO> toDto(List<Evento> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}
