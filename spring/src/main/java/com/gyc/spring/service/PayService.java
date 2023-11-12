package com.gyc.spring.service;

import org.springframework.stereotype.Service;

import com.gyc.spring.dto.PayDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.PayMapper;
import com.gyc.spring.model.Pay;
import com.gyc.spring.repository.PayRepository;

@Service
public class PayService extends GenericService<Pay, Long, PayDTO> {

    public PayService(PayRepository repository, PayMapper mapper){
        super(repository, mapper);
    }

    public PayDTO atualizar(Long id, PayDTO objetoAtualizado) {
        if (repository.existsById(id)) {
            return atualizar(mapper.toDto(mapper.toEntity(objetoAtualizado)));
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
