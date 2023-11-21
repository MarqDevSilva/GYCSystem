package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.RefeicoesDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Refeicoes;

@Component
@ComponentScan
public class RefeicoesMapper implements EntityMapper<RefeicoesDTO, Refeicoes> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
        RefeicoesMapper.mapper = mapper;
    }

    @Override
    public Refeicoes toEntity(RefeicoesDTO entityDTO) {
        return mapper.map(entityDTO, Refeicoes.class);
    }

    @Override
    public RefeicoesDTO toDto(Refeicoes entity) {
        return mapper.map(entity, RefeicoesDTO.class);
    }

    @Override
    public List<Refeicoes> toEntity(List<RefeicoesDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<RefeicoesDTO> toDto(List<Refeicoes> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}
