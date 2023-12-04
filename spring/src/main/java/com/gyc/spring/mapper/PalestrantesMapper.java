package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.PalestranteDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Palestrantes;

@Component
@ComponentScan
public class PalestrantesMapper implements EntityMapper<PalestranteDTO, Palestrantes> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        PalestrantesMapper.mapper = mapper;
    }

    @Override
    public Palestrantes toEntity(PalestranteDTO entityDTO) {
        return mapper.map(entityDTO, Palestrantes.class);
    }

    @Override
    public PalestranteDTO toDto(Palestrantes entity) {
        return mapper.map(entity, PalestranteDTO.class);
    }

    @Override
    public List<Palestrantes> toEntity(List<PalestranteDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<PalestranteDTO> toDto(List<Palestrantes> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}