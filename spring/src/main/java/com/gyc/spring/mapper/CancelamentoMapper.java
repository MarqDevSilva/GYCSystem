package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.CancelamentoDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Cancelamento;

@Component
@ComponentScan
public class CancelamentoMapper implements EntityMapper<CancelamentoDTO, Cancelamento> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        CancelamentoMapper.mapper = mapper;
    }

    @Override
    public Cancelamento toEntity(CancelamentoDTO entityDTO) {
        return mapper.map(entityDTO, Cancelamento.class);
    }

    @Override
    public CancelamentoDTO toDto(Cancelamento entity) {
        return mapper.map(entity, CancelamentoDTO.class);
    }

    @Override
    public List<Cancelamento> toEntity(List<CancelamentoDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<CancelamentoDTO> toDto(List<Cancelamento> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}
