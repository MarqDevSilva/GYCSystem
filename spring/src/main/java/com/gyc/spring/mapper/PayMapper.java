package com.gyc.spring.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.gyc.spring.dto.PayDTO;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.Pay;

@Component
@ComponentScan
public class PayMapper implements EntityMapper< PayDTO, Pay> {

    private static ModelMapper mapper;

    @Autowired
    public void setModelMapper(ModelMapper mapper) {
         PayMapper.mapper = mapper;
    }

    @Override
    public  Pay toEntity( PayDTO entityDTO) {
        return mapper.map(entityDTO, Pay.class);
    }

    @Override
    public  PayDTO toDto( Pay entity) {
        return mapper.map(entity,  PayDTO.class);
    }

    @Override
    public List<Pay> toEntity(List<PayDTO> dtoList) {
        return dtoList.stream()
            .map(this::toEntity)
            .collect(Collectors.toList());
    }

    @Override
    public List<PayDTO> toDto(List<Pay> entityList) {
        return entityList.stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }
}