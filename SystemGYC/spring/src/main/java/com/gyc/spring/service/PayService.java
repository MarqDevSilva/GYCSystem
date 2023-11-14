package com.gyc.spring.service;

import org.springframework.stereotype.Service;

import com.gyc.spring.dto.PayDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.PayMapper;
import com.gyc.spring.model.Pay;
import com.gyc.spring.repository.PayRepository;

@Service
public class PayService extends GenericService<Pay, PayDTO> {

    PayRepository repository; 

    public PayService(PayRepository repository, PayMapper mapper){
        super(repository, mapper);
        this.repository = repository;
    }

    public PayDTO findByEvento(Long id){
        return mapper.toDto((repository.findByEventoId(id)));
    }

    public PayDTO atualizar(Long id, PayDTO objetoAtualizado) {
        if (repository.existsByEventoId(id)) {
            return atualizar(mapper.toDto(mapper.toEntity(objetoAtualizado)));
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
