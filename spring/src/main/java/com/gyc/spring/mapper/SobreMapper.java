package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.SobreDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Sobre;

@Component
@ComponentScan
public class SobreMapper implements EntityMapper<SobreDTO, Sobre> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        SobreMapper.mapper = mapper;
    }

    @Override
    public Sobre toEntity(SobreDTO entityDTO) {
        return mapper.map(entityDTO, Sobre.class);
    }

    @Override
    public SobreDTO toDto(Sobre entity) {
        return mapper.map(entity, SobreDTO.class);
    }

    @Override
    public List<Sobre> toEntity(List<SobreDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<SobreDTO> toDto(List<Sobre> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}
