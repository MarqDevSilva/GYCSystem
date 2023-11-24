package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.FormularioDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Formulario;

@Component
@ComponentScan
public class FormularioMapper implements EntityMapper<FormularioDTO, Formulario> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        FormularioMapper.mapper = mapper;
    }

    @Override
    public Formulario toEntity(FormularioDTO entityDTO) {
        return mapper.map(entityDTO, Formulario.class);
    }

    @Override
    public FormularioDTO toDto(Formulario entity) {
        return mapper.map(entity, FormularioDTO.class);
    }

    @Override
    public List<Formulario> toEntity(List<FormularioDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<FormularioDTO> toDto(List<Formulario> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}