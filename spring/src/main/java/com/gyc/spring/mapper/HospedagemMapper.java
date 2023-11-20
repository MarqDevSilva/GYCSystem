package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.HospedagemDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Hospedagem;

@Component
@ComponentScan
public class HospedagemMapper implements EntityMapper<HospedagemDTO, Hospedagem> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        HospedagemMapper.mapper = mapper;
    }

    @Override
    public Hospedagem toEntity(HospedagemDTO entityDTO) {
        return mapper.map(entityDTO, Hospedagem.class);
    }

    @Override
    public HospedagemDTO toDto(Hospedagem entity) {
        return mapper.map(entity, HospedagemDTO.class);
    }

    @Override
    public List<Hospedagem> toEntity(List<HospedagemDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<HospedagemDTO> toDto(List<Hospedagem> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}