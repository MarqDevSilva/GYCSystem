package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.CapaDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Capa;

@Component
@ComponentScan
public class CapaMapper implements EntityMapper<CapaDTO, Capa> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        CapaMapper.mapper = mapper;
    }

    @Override
    public Capa toEntity(CapaDTO entityDTO) {
        return mapper.map(entityDTO, Capa.class);
    }

    @Override
    public CapaDTO toDto(Capa entity) {
        return mapper.map(entity, CapaDTO.class);
    }

    @Override
    public List<Capa> toEntity(List<CapaDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<CapaDTO> toDto(List<Capa> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}
