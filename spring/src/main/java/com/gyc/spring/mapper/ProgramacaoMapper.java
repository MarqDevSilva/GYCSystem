package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.ProgramacaoDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Programacao;

@Component
@ComponentScan
public class ProgramacaoMapper implements EntityMapper<ProgramacaoDTO, Programacao> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        ProgramacaoMapper.mapper = mapper;
    }

    @Override
    public Programacao toEntity(ProgramacaoDTO entityDTO) {
        return mapper.map(entityDTO, Programacao.class);
    }

    @Override
    public ProgramacaoDTO toDto(Programacao entity) {
        return mapper.map(entity, ProgramacaoDTO.class);
    }

    @Override
    public List<Programacao> toEntity(List<ProgramacaoDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<ProgramacaoDTO> toDto(List<Programacao> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}
