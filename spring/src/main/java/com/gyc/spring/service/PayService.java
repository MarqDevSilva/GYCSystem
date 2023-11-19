package com.gyc.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.PayDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.PayMapper;
import com.gyc.spring.model.Pay;
import com.gyc.spring.repository.PayRepository;

@Service
public class PayService extends BaseService<Pay, PayDTO> {

    @Autowired
    private PayRepository payRepository;

    public PayService(PayRepository repository, PayMapper mapper){
        super(repository, mapper);
    }

    public Pay findByEvento(Long id){
        return payRepository.findByEventoId(id);
    }

    public PayDTO update(Long id, PayDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
