package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.LocalDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Local;

@Component
@ComponentScan
public class LocalMapper implements EntityMapper<LocalDTO, Local> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        LocalMapper.mapper = mapper;
    }

    @Override
    public Local toEntity(LocalDTO entityDTO) {
        return mapper.map(entityDTO, Local.class);
    }

    @Override
    public LocalDTO toDto(Local entity) {
        return mapper.map(entity, LocalDTO.class);
    }

    @Override
    public List<Local> toEntity(List<LocalDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<LocalDTO> toDto(List<Local> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}
